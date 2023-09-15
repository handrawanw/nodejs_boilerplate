module.exports = {
    ok: (values, res, message = "Request was successfully processed and returned") => {
        let status_code = 200
        let data = {
            "code": status_code,
            "message": message,
            "result": values
        }
        return res.status(status_code).send(data)
    },
    created: (values, res, message = "Request was successfully processed and returned") => {
        let status_code = 201
        let data = {
            "code": status_code,
            "message": message,
            "result": values
        }
        return res.status(status_code).send(data)
    },
    bad: (values, res, message = "Missing or invalid parameter(s)") => {
        let status_code = 400
        let data = {
            "code": status_code,
            "message": message,
            "result": values
        }
        return res.status(status_code).send(data)
    },
    unauthorized: (values, res, message = "Unauthorized") => {
        let status_code = 401
        let data = {
            "code": status_code,
            "message": message,
            "result": values
        }
        return res.status(status_code).send(data)
    },
    accessDenied: (values, res, message = "Access Forbidden") => {
        let status_code = 403
        let data = {
            "code": status_code,
            "message": message,
            "result": values
        }
        return res.status(status_code).send(data)
    },
    notFoundRecord: (values, res, message = "Ops... Not Found") => {
        let status_code = 404
        let data = {
            "code": status_code,
            "message": message,
            "result": values
        }
        return res.status(status_code).send(data)
    },
    notFound: (values, res, message = "Ops... Not Found") => {
        let status_code = 404
        let data = {
            "code": status_code,
            "message": message,
            "result": values
        }
        return res.status(status_code).send(data)
    },
    timeout: (values, res, message = "Ops... Request Timeout") => {
        let status_code = 408
        let data = {
            "code": status_code,
            "message": message,
            "result": values
        }
        return res.status(status_code).send(data)
    },
    duplicated: (values, res, message = "Ops... Duplicated data") => {
        let status_code = 409
        let data = {
            "code": status_code,
            "message": message,
            "result": values
        }
        return res.status(status_code).send(data)
    },
    entityLarge: (values, res, message = "Request Entity Too Large") => {
        let status_code = 413
        let data = {
            "code": status_code,
            "message": message,
            "result": values
        }
        return res.status(status_code).send(data)
    },
    error: (values, res, message = "Ops... Internal server error, please contact support") => {
        let status_code = 500
        let data = {
            "code": status_code,
            "message": message,
            "result": values
        }
        return res.status(status_code).send(data)
    },
    errorCognito: (values, res, message = "Ops... Internal server error, please contact support") => {
        let status_code = 422
        let data = {
            "code": status_code,
            "message": message,
            "result": values
        }
        return res.status(status_code).send(data)
    }
}