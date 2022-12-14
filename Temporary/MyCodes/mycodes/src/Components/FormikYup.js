import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormikYup = () => {
    const formik = useFormik({
        initialValues: {
            userName: "",
            userEmail: "",
            gender: "",
            country:"",

            firstNum: '',
            secondNum:''
        },
        validationSchema:Yup.object({
                userName: Yup.string()
                .required("this is required field!!")
                .max(10,"name must be less than 10 characters"),

                firstNum:Yup.number()
                .required("this is required field")
                .min(1,"enter altleast 1 number"),

                secondNum:Yup.number()
                .required("this is required field")
                .moreThan(Yup.ref('firstNum'),"secondNum must be more tha firstNum")
        }),
        onSubmit: (values) => {
            console.log("Form Submitted", values)
        }
    })
    // console.log(formik.values)
    // console.log(formik.errors)
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input type="text" name="userName" placeholder="enter name"
                    onChange={formik.handleChange}
                    value={formik.values.userName}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.userName && formik.errors.userName && <p style={{color:"red"}}>{formik.errors.userName}</p>}
                <input type="email" name="userEmail" placeholder="enter Email"
                    onChange={formik.handleChange}
                    value={formik.values.userEmail}
                /><br />

                <span>Select Gender</span><br />
                <label>Male</label>
                <input type="radio" name="gender" value="Male" onChange={formik.handleChange}/>
                <label >Female</label>
                <input type="radio" name="gender" value="Female" onChange={formik.handleChange}/>
                <label>Other</label>
                <input type="radio" name="gender" value="Other" onChange={formik.handleChange}/>

                <select name="country" onChange={formik.handleChange}>
                    <option value="">Select Country:</option>
                    <option value="japan">Japan</option>
                    <option value="india">India</option>
                    <option value="america">America</option>
                </select><br/><br/>

                <input type="number" name="firstNum" onChange={formik.handleChange} 
                placeholder="enter first num" value={formik.values.firstNum}/>
                {formik.errors.firstNum && <p style={{color:"blue"}}>{formik.errors.firstNum}</p>}

                <input type="number" name="secondNum" onChange={formik.handleChange} 
                placeholder="enter Second num" value={formik.values.secondNum}/>
                {formik.errors.secondNum && <p style={{color:"green"}}>{formik.errors.secondNum}</p>}

                <button type="submit">Click Here</button>
            </form>
        </div>
    )
}

export default FormikYup
