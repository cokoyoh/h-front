<template>
    <div class="add-app-link">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-3"></div>
                <div class="col-lg-6  col-md-6 ">
                    <form class="form-horizontal" @submit.prevent="onSubmit">
                        <fieldset>
                            <div class="form-group">
                                <label class="control-label">App Title</label>
                                <input type="text" class="form-control"
                                       id="title" name="title"
                                       v-model="app.title"
                                       v-validate="'required'"
                                       placeholder="Title of the app...">
                                <span v-show="errors.has('title')"
                                      class="help is-danger">{{ errors.first('title')}}</span>
                            </div>
                            <div class="form-group">
                                <label class="control-label">App Image</label>
                                <input type="file"  id="image" name="image"
                                       @change="imageChanged">
                            </div>
                            <div class="form-group">
                                <label class="control-label">App URI</label>
                                <input type="text" class="form-control"
                                       id="uri" name="uri"
                                       v-model="app.uri"
                                       v-validate="'required'"
                                       placeholder="Link to the app in the app store">
                                <span v-show="errors.has('uri')"
                                      class="help is-danger">{{ errors.first('uri')}}</span>
                            </div>
                            <div class="form-group">
                                <label class="control-label">Description</label>
                                <textarea class="form-control"
                                          v-validate="'required'"
                                          v-model="app.description"
                                          placeholder="What is unique about this particular app and how does it contribute to health"
                                          rows="5" id="textArea">
                                </textarea>
                                <span v-show="errors.has('description')"
                                      class="help is-danger">{{ errors.first('description')}}</span>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-success" type="submit">Add Link</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {add_app_link_url, get_header} from "../../../../global/config";

    export default {
        data() {
            return {
                app: {
                    image: '',
                    title: '',
                    description: '',
                    uri: ''
                }
            }
        },
        methods: {
            onSubmit(){
                let post_data = this.app
                this.$validator.validateAll().then(() => {
                    this.$http.post(add_app_link_url,post_data, {headers:get_header()})
                        .then(response => {
                            console.log(response)
                            if(response.status === 200){
                                swal("Adding App URL", response.body.message,'success')
                            }
                        })
                })
            },
            imageChanged(e){
                console.log(e.target.files[0])
                var fileReader = new FileReader()
                fileReader.readAsDataURL(e.target.files[0])
                fileReader.onload = (e) => {
                    this.app.image = e.target.result
                }
                console.log(this.app)
            },
        }
    }
</script>

<style lang="sass">
    .add-app-link
        padding: 30px 0 30px

    .is-danger
        color: red
        font-size: 14px
</style>