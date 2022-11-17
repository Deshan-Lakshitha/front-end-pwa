import Joi from "joi";

// Auth validation Functions

const emailValidation = (data) => {
    const email_val_schema = Joi.object({
        email: email_validation_joi_object()
    })
    const { error, value } = email_val_schema.validate(data, { abortEarly: false })
    return ({ error, value })
}

const passwordValidation = (password) => {
    const pass_val_schema = Joi.object({
        password: password_validation_joi_object()
    })
    const { error, value } = pass_val_schema.validate(password, { abortEarly: false })
    return ({ error, value })
}

const registerPovalidation = (data) => {
    const register_po_schema = Joi.object({
        email: email_validation_joi_object(),
        firstName: name_validation_joi_object(),
        lastName: name_validation_joi_object(),
        contactNo: contact_number_validation_joi_object(),
        password: password_validation_joi_object(),
        rePassword: Joi.custom((value, helper) => {
            if (value != data.password) {
                return helper.message("Two passwords does not match");
            }
            return true;
        }),
    })
    const { error, value } = register_po_schema.validate(data, { abortEarly: false })
    return ({ error, value })
}

const nicValidation = (data) => {
    const nic_val_schema = Joi.object({
        NIC: nic_validation_joi_object()
    })
    const { error, value } = nic_val_schema.validate(data, { abortEarly: false })
    return ({ error, value })
}

const nameValidation = (data,field) => {
    const name_val_schema = Joi.object({
        [`${field}`] : name_validation_joi_object()
    })
    const { error, value } = name_val_schema.validate(data, { abortEarly: false })
    return ({ error, value })
}

const contactNumberValidation = (data) => {
    const contact_number_val_schema = Joi.object({
        contactNo: contact_number_validation_joi_object()
    })
    const { error, value } = contact_number_val_schema.validate(data, { abortEarly: false })
    return ({ error, value })
}

// ..................JOI Validate Objects...........................

const email_validation_joi_object = () => {
    return Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "lk", "org"] } }).required()
        .messages({
            "string.empty": "Field should not be empty!",
            "string.required": "Field is required!",
            "string.email": "Enter a valid email address!"
        });
}

const password_validation_joi_object = () => {
    return Joi.string()
        .required()
        .min(8)
        .max(12)
        .custom(custom_password)
        .messages({
            "string.empty": "Field should not be empty!",
            "string.required": "Field is required!",
            "string.min": `Field should have at least {#limit} characters!`,
            "string.max": `Field should have at most {#limit} characters!`,
        });
}

const custom_password = (value, helper) => {
    if (value.search(/[A-Z]/) < 0) {
        return helper.message("Password must contain at least one uppercase letter")
    } else if (value.search(/[a-z]/) < 0) {
        return helper.message("Password must contain at least one lowercase letter")
    } else if (value.search(/[0-9]/i) < 0) {
        return helper.message("Password must contain at least one number")
    } else if (value.search(/[#?!@$%^&*-]/i) < 0) {
        return helper.message("Password must contain at least one special character")
    } else {
        return true
    }
}

const name_validation_joi_object = () => {
    return Joi.string().required().pattern(new RegExp(/^[A-Z]+[a-zA-Z0-9 ]+$/))
        .messages({
            "string.empty": "Field should not be empty!",
            "string.pattern.base": "First letter must be a Capital"
        });
}

const contact_number_validation_joi_object = () => {
    return Joi.string().required().pattern(new RegExp('^(?:7|0)[0-9]{9}$'))
        .messages({
            "string.empty": "Field should not be empty!",
            "string.required": "Field is required!",
            "string.pattern.base": "Invalid format"
        });
}

const nic_validation_joi_object = () => {
    return Joi.string().required().pattern(new RegExp('^([0-9]{9}[v|V]|[0-9]{12})$'))
    .messages({
        "string.empty": "Field should not be empty!",
        "string.pattern.base": "Invalid NIC format"
    });
}

export default {
    emailValidation,
    registerPovalidation,
    nicValidation,
    nameValidation,
    passwordValidation,
    contactNumberValidation
}