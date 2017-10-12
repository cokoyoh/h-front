<template>
    <div class="add-car">
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-md-2"></div>
                <div class="col-lg-8 col-md-8 ">
                    <form class="form-horizontal" @submit.prevent="onSubmit">
                        <fieldset>
                            <div class="form-group has-success">
                                <label class="control-label">Number Plate</label>
                                <input type="text" class="form-control" for="inputSuccess" id="plate" name="plate"
                                       v-model="car.plate_number"
                                       v-validate="'required'"
                                       placeholder="KBQ 001A">
                                <span v-show="errors.has('plate')"
                                      class="help is-danger">{{ errors.first('plate')}}</span>
                            </div>
                            <div class="form-group has-success">
                                <label class="control-label">Car Model</label>
                                <input type="text" class="form-control" for="inputSuccess" id="model" name="model"
                                       v-model="car.model"
                                       v-validate="'required'"
                                       placeholder="Toyota, Tesla ...">
                                <span v-show="errors.has('model')"
                                      class="help is-danger">{{ errors.first('model')}}</span>
                            </div>
                            <div class="form-group has-success">
                                <label class="control-label">Capacity of Car</label>
                                <input type="number" class="form-control" for="inputSuccess" id="capacity" name="capacity"
                                       v-model="car.capacity"
                                       v-validate="'required|min_value:1'"
                                       placeholder="2 Seats available">
                                <span v-show="errors.has('capacity')"
                                      class="help is-danger">{{ errors.first('capacity')}}</span>
                            </div>
                            <div class="form-group has-success">
                                <label class="control-label">Cost of Hire</label>
                                <input type="number" class="form-control" for="inputSuccess" id="cost" name="cost"
                                       v-model="car.cost"
                                       v-validate="'required|min_value:1000'"
                                       placeholder="KSh 2500">
                                <span v-show="errors.has('cost')"
                                      class="help is-danger">{{ errors.first('cost')}}</span>
                            </div>
                            <div class="form-group has-success">
                                <button class="btn btn-md btn-success"><i class="fa fa-plus" aria-hidden="true"></i> Add Car</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {add_new_car_url, get_header} from "../../../../global/config";

    export default {
        data(){
            return {
                car: {
                    plate_number: '',
                    model: '',
                    capacity: '',
                    cost: ''
                }
            }
        },
        methods: {
            onSubmit(e){
                this.$validator.validateAll().then(() => {
                    let post_data = {
                        plate_number: this.car.plate_number,
                        model: this.car.model,
                        capacity: this.car.capacity,
                        cost: this.car.cost
                    }
                    this.$http.post(add_new_car_url, post_data, {headers:get_header()})
                        .then(response => {
                            if(response.status === 200) {
                                console.log(response)
                                swal('Success',response.body.message,'success')
                                this.car = {}
                            }
                        })
                })
            }
        }
    }
</script>

<style lang="sass">
    .add-book
        padding: 30px 0 30px
    .is-danger
        color: red
        font-size: 14px
</style>