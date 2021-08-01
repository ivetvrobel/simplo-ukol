<template>
    <div class="container">
        <h2 class="text-primary mb-4">Edit Customer Info</h2>
        <form>
            <div class="mb-3">
                <label for="editName" class="form-label">Name</label>
                <input type="text" id="editName" class="form-control" />
            </div>

            <div class="mb-3">
                <label for="editEmail" class="form-label">Email</label>
                <input type="email" id="editEmail" class="form-control" />
            </div>

            <div class="mb-3">
                <label for="editPhone" class="form-label">Phone</label>
                <input type="phone" id="editPhone" class="form-control" />
            </div>

            <div class="mb-3">
                <router-link
                    to="/customerstable"
                    class="btn btn-secondary me-2 mt-2"
                    >Cancel</router-link
                >
                <button
                    v-on:click="editCustomer(customer.id)"
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
    name: 'CustomerEditForm',
    data() {
        return {
            customers: [],
            customer: '',
        };
    },
    methods: {
        editCustomer(id) {
            fetch(`http://localhost:3000/customers/${id}`, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    name: document.getElementById('editName').value,
                    email: document.getElementById('editEmail').value,
                    phone: document.getElementById('editPhone').value,
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
