import Joi from "joi";

const fuelAmountValidation = (data) => {
    const amount_val_schema = Joi.object({
        amount: amount_validation_joi_object()
    })
    const { error, value } = amount_val_schema.validate(data, { abortEarly: false })
    return ({ error, value })
}

const registerVehicleValidation = (data) => {
    const val = {
            letters: data.letters === '' ? true : false,
            vehicleNo: data.vahicleNo === null ? true : false,
            chassisNo: data.chassisNo === '' ? true : false,
            vehicle: data.vehicle === '' ? true : false,
            fuel: data.fuel === null ? true : false
        }
    return val
}

// ..................JOI Validate Objects...........................

const amount_validation_joi_object = () => {
    return Joi.number().integer().min(1).required()
        .messages({
            "any.required": "Field should not be empty",
            "number.integer": "Amount must be an integer",
            "number.min": "Amount should be greater than zero",
            "number.precision": "Only two decimal places are allowed"
        });
}

export default {
    fuelAmountValidation,
    registerVehicleValidation,
}