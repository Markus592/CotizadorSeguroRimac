import { Button } from "../button";
import { useFormik } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "../FormData/Style.scss";
import getUser from "../../services/getUser";
import DataContext from "../../context/DataContext";

const Index = () => {
  const { user, setUser } = useContext(DataContext);
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      NroDoc: "",
      Celular: "",
      Placa: "",
      Politica: "",
    },
    validationSchema: Yup.object({
      NroDoc: Yup.string()
        .required("Este campo es obligatorio")
        .matches(/^[0-9]+$/, "Tiene que ser solo digitos")
        .min(8, "Tiene que ser de 8 digitos el número de DNI")
        .max(8, "Tiene que ser de 8 digitos el número de DNI"),
      Celular: Yup.string()
        .required("Este campo es obligatorio")
        .matches(/^[0-9]+$/, "Tiene que ser solo digitos")
        .min(9, "Tiene que ser de 9 digitos el número de Celular")
        .max(9, "Tiene que ser de 9 digitos el número de Celular"),
      Placa: Yup.string()
        .min(7, "Tiene que tener al menos 7 caracteres con el formato xxx-xxx")
        .required("Este campo es obligatorio"),
      Politica: Yup.boolean().oneOf(
        [true],
        "Tienes que aceptar las Politica de Privacidad"
      ),
    }),
    onSubmit: (values) => {
      setUser(getUser(values.Placa).then(res=>setUser(res)));
      navigate('arma-tu-plan') 
    },
  });
  // console.log(user)

  // const [user, setUser] = useState([]);
  // useEffect(() => {
  //   getUser().then((user) => setUser(user));
  // },[]);
 
  
  // setUser(["hola"])

  return (
    <div className="formData">
      <div className="formData__card">
        <h1>Déjanos tus datos</h1>
        <form onSubmit={formik.handleSubmit} className="form">
          <div className="tpDocumentCard">
            <select name="tp_Document" id="tp_Document">
              <option value="Dni">DNI</option>
            </select>
            <input
              className="form__input "
              type="text"
              {...formik.getFieldProps("NroDoc")}
              name="NroDoc"
              placeholder="Nro. de doc"
              id="nroDoc"
            />
          </div>
          {formik.touched.NroDoc && formik.errors.NroDoc ? (
            <div className="errorForm">{formik.errors.NroDoc}</div>
          ) : null}
          <input
            className="form__input"
            type="text"
            {...formik.getFieldProps("Celular")}
            name="Celular"
            placeholder="Celular"
          />
          {formik.touched.Celular && formik.errors.Celular ? (
            <div className="errorForm">{formik.errors.Celular}</div>
          ) : null}
          <input
            className="form__input"
            type="text"
            {...formik.getFieldProps("Placa")}
            name="Placa"
            placeholder="Placa"
          />
          {formik.touched.Placa && formik.errors.Placa ? (
            <div className="errorForm">{formik.errors.Placa}</div>
          ) : null}
          <div className="politicaCard">
            <input
              type="checkbox"
              name="politicaPrivacidad"
              className="form__inputCheck"
              id="inputPoliticaPrivacidad"
              {...formik.getFieldProps("Politica")}
            />
            <label
              className="politicaCard__text"
              htmlFor="inputPoliticaPrivacidad"
            >
              Acepto la
              <a href="/"> Política de Protecciòn de Datos Personales</a> y los
              <a href="/"> Términos y Condiciones.</a>
            </label>
          </div>
          {formik.touched.Politica && formik.errors.Politica ? (
            <div className="errorForm">{formik.errors.Politica}</div>
          ) : null}
          <br />
          <Button  />
        </form>
      </div>
    </div>
  );
};

export default Index;
