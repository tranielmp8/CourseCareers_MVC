import addFormats from 'ajv-formats';
import Ajv from 'ajv';
const ajv = new Ajv();
addFormats(ajv);
const schema = {
    type: 'object',
    properties: {
        username: {
            type: 'string',
            minLength: 5,
            maxLength: 50,
        },
        email: {
            type: 'string',
            format: 'email',
        },
    },
    required: ['username', 'email'],
};
const validate = ajv.compile(schema);
const validateAccount = (req, res, next) => {
    const valid = validate(req.body);
    if (!valid) {
        res.status(400).json({
            error: 'Invalid request body',
            details: validate.errors,
        });
        return;
    }
    next();
};
// const validateAccount = (req: Request, res: Response, next: NextFunction) => {
//   const valid = validate(req.body);
//   if (!valid) {
//       const betterErrors = betterAjvErrors({
//           schema,
//           data: req.body,
//           errors: validate.errors,
//           basePath: '',
//       });
//       res.status(400).json({
//           error: betterErrors,
//       });
//       return;
//   }
//   next();
// };
export default { validateAccount };
