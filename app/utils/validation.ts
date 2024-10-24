import * as Yup from "yup";
import messages from "../utils/messages";

export const schemaForm = Yup.object().shape({
  name: Yup.string().required("Nome obrigatório"),
  crmv: Yup.string()
    .matches(/^\d{5}$/, "CRMV deve ser numérico e ter 5 dígitos")
    .required("CRMV obrigatório"),
  email: Yup.string().email("Email inválido").required("Email obrigatório"),
  password: Yup.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "As senhas devem corresponder")
    .required("Confirmação de senha é obrigatória"),
});

export const changePasswordSchema = Yup.object().shape({
  actualPassword: Yup.string().required(
    messages.validationErrors.actualPassword
  ),
  newPassword: Yup.string()
    .min(6, messages.validationErrors.newPasswordMin)
    .notOneOf(
      [Yup.ref("actualPassword")],
      messages.validationErrors.newPasswordNotSame
    )
    .required(messages.validationErrors.newPasswordRequired),
  confirmNewPassword: Yup.string()
    .oneOf(
      [Yup.ref("newPassword")],
      messages.validationErrors.confirmPasswordMatch
    )
    .required(messages.validationErrors.confirmNewPassword),
});

export const validateForm = async (
  schema: Yup.ObjectSchema<any>,
  formData: any,
  setErrors: (errors: { [key: string]: string }) => void
): Promise<boolean> => {
  try {
    setErrors({});

    await schema.validate(formData, { abortEarly: false });
    return true;
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      const validationErrors: { [key: string]: string } = {};

      err.inner.forEach((error) => {
        if (error.path) {
          validationErrors[error.path] = error.message;
        }
      });
      setErrors(validationErrors);
    }
    return false;
  }
};
