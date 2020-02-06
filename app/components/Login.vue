<template>
    <page actionBarHidden="true">
         <FlexboxLayout class="page">
                <StackLayout class="form">
                    <Image class="logo" 
                        src="https://papaleguas-avatars.s3-sa-east-1.amazonaws.com/logo.png"
                        alt="" height="250"></Image>
                    <Label class="header" text="Papaléguas App"></Label>

                    <GridLayout rows="auto, auto, auto">
                        <StackLayout row="0" class="input-field">
                            <TextField class="input" hint="Email" :isEnabled="!processing"
                                    keyboardType="email" autocorrect="false"
                                    autocapitalizationType="none" v-model="user.email"
                                    returnKeyType="next" @returnPress="focusPassword">
                            </TextField>
                        </StackLayout>
                        <StackLayout row="1" class="input-field">
                                <TextField class="input" ref="password" :isEnabled="!processing"
                                    hint="Password" secure="true" v-model="user.password"
                                    :returnKeyType="isLoggingIn ? 'done' : 'next'"
                                    @returnPress="focusConfirmPassword"></TextField>
                                <StackLayout class="hr-light"></StackLayout>
                        </StackLayout>
                        
                    </GridLayout>
                    <Button :text="isLoggingIn ? 'Log In' : 'Sign Up'" :isEnabled="!processing"
                            @tap="submit" class="btn btn-primary m-t-20"></Button>
                        <Label *v-show="isLoggingIn" text="Esqueceu a senha?"
                            class="login-label" @tap="forgotPassword()"></Label>
                </StackLayout>
                
         </FlexboxLayout>
    </page>

    
</template>

<script>
import axios from "axios"
import Home from "./Home"
export default {
    data() {
            return {
                isLoggingIn: true,
                processing: false,
                user: {
                    email: "ederson.souza.mg@gmail.com",
                    password: "123456",
                    confirmPassword: "twotec123"
                }
            };
        },

        methods:{

            submit(){
                axios.post('http://192.168.1.9:3000/cliente/authenticate', {
                    email: this.user.email,
                    password: this.user.password
                  }).then(response => {
                    this.$navigateTo(Home, { clearHistory: true });

                    const token = response.data.token
                      console.log(" token: "+token);
                    })
                    .catch(ferror => {
                      console.log(error);
                    });
            }
            

        }
    
}
</script>
<style scoped>
    .page {
        align-items: center;
        flex-direction: column;
    }

    .form {
        margin-left: 30;
        margin-right: 30;
        flex-grow: 2;
        vertical-align: middle;
    }

    .logo {
        margin-bottom: 12;
        height: 90;
        font-weight: bold;
    }

    .header {
        horizontal-align: center;
        font-size: 25;
        font-weight: 600;
        margin-bottom: 70;
        text-align: center;
        color: #D51A1A;
    }

    .input-field {
        margin-bottom: 25;
    }

    .input {
        font-size: 18;
        placeholder-color: #A8A8A8;
    }

    .input:disabled {
        background-color: white;
        opacity: 0.5;
    }

    .btn-primary {
        margin: 30 5 15 5;
    }

    .login-label {
        horizontal-align: center;
        color: #A8A8A8;
        font-size: 16;
    }

    .sign-up-label {
        margin-bottom: 20;
    }

    .bold {
        color: #000000;
    }
</style>