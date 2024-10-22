import * as Yup from "yup";

// Define o esquema de validação
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

// Função genérica para validar qualquer formulário com Yup
export const validateForm = async (
  schema: Yup.ObjectSchema<any>,
  formData: any,
  setErrors: (errors: { [key: string]: string }) => void
): Promise<boolean> => {
  try {
    // Limpa os erros atuais
    setErrors({});

    // Valida o formulário
    await schema.validate(formData, { abortEarly: false });
    return true;
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      const validationErrors: { [key: string]: string } = {};

      // Mapeia os erros para o objeto de erros
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
