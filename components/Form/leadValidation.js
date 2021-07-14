import * as Yup from "yup";

export const leadValidation = Yup.object({
  name: Yup.string()
    .max(40, "ФИО не должно превышать 40 символов!")
    .trim()
    .required("Поле обязательно!"),
  phoneNumber: Yup.string()
    .trim()
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
      "Некорректный номер телефона!"
    )
    .required("Поле обязательно!"),
  agree: Yup.boolean().oneOf([true], "Вы должны принять условия соглашения!"),
});
