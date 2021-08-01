<template>
    <div class="container">
        <h2 class="text-primary mb-4">Create a customer</h2>
        <form>
            <div class="mb-3">
                <label for="registerName" class="form-label">Name</label>
                <input type="text" id="registerName" class="form-control" />
            </div>

            <div class="mb-3">
                <label for="registerEmail" class="form-label">Email</label>
                <input type="email" id="registerEmail" class="form-control" />
            </div>

            <div class="mb-3">
                <label for="registerPhone" class="form-label">Phone</label>
                <input type="phone" id="registerPhone" class="form-control" />
            </div>

            <div class="mb-3">
                <router-link
                    to="/customerstable"
                    class="btn btn-secondary me-2 mt-2"
                    >Cancel</router-link
                >
                <button
                    v-on:click="registerCustomer()"
                    type="submit"
                    class="btn btn-primary mt-2"
                >
                    Submit
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'CustomerRegisterForm',
    data() {
        return {
            customers: [],
        };
    },
    methods: {
        registerCustomer() {
            fetch('http://localhost:3000/customers/', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    name: document.getElementById('registerName').value,
                    email: document.getElementById('registerEmail').value,
                    phone: document.getElementById('registerPhone').value,
                }),
            })
                .then((response) => response.json())
                .then((data) => (this.customers = data));
        },
    },
};
</script>

<style scoped>
.container {
    text-align: left;
    width: 450px;
    max-width: 100%;
    padding: 40px 50px;
    border: 1px solid #ced4da;
    border-radius: 10px;
}
</style>
