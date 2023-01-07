<template>
    <main>
        <section>
            <p>Current category is {{category}}</p>
            <input v-model="category" placeholder="category" />
        </section>

        <section>
            <h2>Create real estate</h2>
            <form v-on:submit.prevent="addRealEstate">
                <!-- me kriju nje forme -->
                <!-- qe na mundeson me rujt emrin, qmimin e nje patundshermi -->
                <!-- me shtu ne liste e patundshmerive -->

                <FormInput label="Name" v-model="newRealEstate.name" />

                <!-- <label>Name: <input v-model="newRealEstate.name" /></label> -->
                <label>Price: <input v-model.number="newRealEstate.price" type="number" /></label>
                <button>Create new listing</button>
            </form>
        </section>
        <section>
            <h2>Real estate list</h2>
            <!-- Listo te gjitha patundshmerite -->
            <div v-for="realEstate in realEstateList" v-bind:key="realEstate.name">
                <h3>{{realEstate.name}}</h3>
                <p>The current price of this real estate is {{realEstate.price}}$</p>
            </div>
        </section>
        <AppFriendsList />
    </main>
</template>

<script setup>
import AppFriendsList from '@/components/AppFriendsList.vue';
import FormInput from '@/components/Form/FormInput.vue';
import { ref, reactive } from 'vue';

const category = ref('');
const realEstateList = reactive([]);
const newRealEstate = reactive({
    name: '',
    price: 0
})

function addRealEstate() {
    realEstateList.push({ ...newRealEstate });
    newRealEstate.name = '';
    newRealEstate.price = 0;
}
</script>

<!-- <script>
    export default {
        data() {
            return {
                realEstateList: [],
                newRealEstate: {
                    name: '',
                    price: 0,
                },
                category: ''
            }
        },
        methods: {
            addRealEstate() {
                this.realEstateList.push(
                    this.newRealEstate
                );
                this.newRealEstate = { name: '', price: 0 };
            }
        },        
    }
</script> -->

<style scoped >
    h3 {
        color: lightcoral;
    }

</style>