import { TextField, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import classes from './SubscribeForm.module.css'

const useStyles = makeStyles((themes) => ({
    root: {
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: "#e50000",
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: "#e50000",
            
        },
        "& .MuiOutlinedInput-notchedOutline:hover": {
            borderColor: "#970505",
        }
    }
})) 

const SubscribeForm = (props) => {
    const { t } = useTranslation()

    const material = useStyles()

    const { handleSubmit, control, reset, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        reset({
            email: ""
        })
    }

    return(
        <div className={classes.main}>
            <form onSubmit={handleSubmit(data => onSubmit(data))}>
                <div className={classes.field}>
                    <label>{t("footer.subscribe")}</label>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: {
                                value: true,
                                message: t("errors.required")
                            },
                            pattern: {
                                value: /^[a-zAz0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/,
                                message: t("errors.email")
                            }
                        }}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField 
                                error={!!error} 
                                helperText={error ? error.message : null}
                                classes={material} 
                                placeholder="Email"
                                variant="outlined"
                                onChange={onChange}
                                value={value}
                            />
                        )}
                    />
                </div>   
                <Button type="submit">OK</Button> 
            </form>    
        </div>
    )   
} 

export default SubscribeForm