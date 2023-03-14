<template>
    <div class="modals">
        <h1>Modals </h1>
        <div class="modals__block">
            <!-- first form -->
            <button class="btn" @click="modalFirst = !modalFirst">Basic modal</button>
            <modalView 
                @close = "closeFirst"
                v-show="modalFirst"
                :modalFirst = "modalFirst"
                title="Basic modal"
            >
                <div slot="body">
                    <h3>{{title}}</h3>
                    <p>It is basic modal</p>
                    <button class="btn" @click="modalFirst = !modalFirst">well done!</button>
                </div>
            </modalView>
            <!-- second form -->
            <button class="btn" @click="modalSecond.show = !modalSecond.show">Second modal with form</button>
            <modalView 
                @close = "modalSecond.show = false"
                v-show="modalSecond.show"
                title="Modal with form"
            >
                <div slot="body">
                    <form class="modal__form" @submit.prevent="submitSecondForm">
                        <label for="">Name</label>
                        <input type="text" v-model="modalSecond.name">
                        <label for="">Email</label>
                        <input type="email" v-model="modalSecond.email">
                        <button class="btn">Submit</button>
                    </form>
                </div>
            </modalView>
            <!-- modal with validate -->
            <button class="btn" @click="modalValidate = !modalValidate">Second modal with form with validate</button>
            <modalValidate @close="closeFirst" v-if="modalValidate"></modalValidate>
        </div>
    </div>
</template>

<script>
import modalView from '@/components/UI/ModalView.vue'
import modalValidate from '@/components/ModalValidate.vue'

export default {
    components: {
        modalView, modalValidate
    },
    data () {
        return {
            title: '',
            titleFirst: 'Modal',
            modalFirst: false,
            modalSecond: {
                show: false,
                name: '',
                email: ''
            },
            modalValidate: false
        }
    },
    methods: {
        closeFirst() {
            this.modalFirst = false
            this.modalValidate = false
        },
        submitSecondForm() {
            console.log({
                name: this.modalSecond.name,
                email: this.modalSecond.email
            })
            this.modalSecond.name = "",
            this.modalSecond.email = "",
            this.modalSecond.show = false
        }
    }
}
</script>

<style lang="scss">
.modals {
    text-align: center;
}
.btn {
    background-color: #e5e524;
    padding: 10px 25px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    text-transform: uppercase;
    transition: 0.3s;
    margin-right: 25px;
    box-shadow: 2px 2px 3px 0 #000;
    &:hover {
        background-color: rgb(47, 226, 71);
        transform: translate(3px, 3px);
        transition: 0.3s;
    }
}
.modal__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        padding: 5px 15px;
        border-radius: 5px;
        outline: none;
        border: 1px solid gray;
        margin-bottom: 10px;
    }
    .btn {
        margin-right: 0;
    }
}
</style>
