<template>
    <div class="add-post">
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-md-2"></div>
                <div class="col-lg-8  col-md-8 ">
                    <form class="form-horizontal" @submit.prevent="onSubmit">
                        <fieldset>
                            <div class="form-group">
                                <label class="control-label">Category</label>
                                <div class="row">

                                    <div class="col-lg-4 col-md-4">
                                        <div class="radio">
                                            <label><input type="radio" value= 1 id="medicine" v-model="article.category_id"> Medicine</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4">
                                        <div class="radio">
                                            <label><input type="radio"  id="fitness" value= 2 v-model="article.category_id"> Fitness</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4">
                                        <div class="radio">
                                            <label><input type="radio"  id="diseases" value= 3 v-model="article.category_id"> Diseases</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label">Title</label>
                                <input type="text" class="form-control"
                                       id="title" name="title"
                                       v-model="article.title"
                                       v-validate="'required'"
                                       placeholder="News article...">
                                <span v-show="errors.has('title')"
                                      class="help is-danger">{{ errors.first('title')}}</span>
                            </div>
                            <div class="form-group">
                                <label class="control-label">Body</label>
                                <textarea class="form-control"
                                          v-validate="'required'"
                                          v-model="article.body"
                                          placeholder="Content of the article"
                                          aria-multiline="true"
                                          rows="10" id="body" name="body">
                                </textarea>
                                <span v-show="errors.has('body')"
                                      class="help is-danger">{{ errors.first('body')}}</span>
                            </div>
                            <div class="form-group">
                                <label class="control-label">Summary</label>
                                <textarea class="form-control"
                                          v-validate="'required'"
                                          v-model="article.summary"
                                          placeholder="Brief summary of this article. This is what all users will assume the article is about..."
                                          aria-multiline="true"
                                          rows="5" id="summary" name="summary">
                                </textarea>
                                <span v-show="errors.has('summary')"
                                      class="help is-danger">{{ errors.first('summary')}}</span>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        Article Image
                                        <input type="file"  id="image" name="image"
                                               @change="imageChanged">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <button class="btn btn-success pull-right" type="submit">Add Post</button>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {add_new_article_url, get_header} from "../../../../global/config";

    export default {
        data() {
            return {
                article: {
                    title: '',
                    body: '',
                    category_id: '',
                    image: '',
                    summary: ''
                }
            }
        },
        methods: {
            onSubmit() {
                this.$validator.validateAll().then(() => {
                    console.log(this.article)
                    let post_data = this.article
                    this.$http.post(add_new_article_url,post_data, {headers:get_header()})
                        .then(response => {
                            console.log(response.body.message)
                            if(response.status === 200){
                                swal('Adding New Article', response.body.message,'success')
                            }
                        })
                })
            },
            imageChanged(e){
                console.log(e.target.files[0])
                var fileReader = new FileReader()
                fileReader.readAsDataURL(e.target.files[0])
                fileReader.onload = (e) => {
                    this.article.image = e.target.result
                }
                console.log(this.article.image)
            },
        }
    }
</script>

<style lang="sass">
    .add-post
        padding: 30px 0 30px
        .is-danger
            color: red
            font-size: 14px
</style>