<template>
    <div class="container">
        <h3 class="float-left">Customers</h3>
        <router-link to="/customerregister" class="btn btn-primary"
            >Create a customer</router-link
        >
        <!--Customers Table  -->
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="customer in customers" :key="customer.id">
                    <th scope="row">{{ customer.id }}</th>
                    <td>{{ customer.name }}</td>
                    <td>{{ customer.email }}</td>
                    <td>{{ customer.phone }}</td>

                    <td>
                        <form>
                            <router-link
                                to="/customeredit"
                                class="btn btn-sm btn-secondary me-1"
                                >Edit</router-link
                            >
                            <button
                                v-on:click="deleteCustomer(customer.id)"
                                type="submit"
                                class="btn btn-sm btn-danger"
                            >
                                Delete
                            </button>
                        </form>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'CustomersTable',
    data() {
        return {
            customers: [],
        };
    },

    created() {
        fetch('http://localhost:3000/customers')
            .then((response) => response.json())
            .then((data) => (this.customers = data));
    },

    methods: {
        deleteCustomer(id) {
            fetch(`http://localhost:3000/customers/${id}`, {
                method: 'DELETE',
            }).then((response) => response.json());
            fetch('http://localhost:3000/customers')
                .then((response) => response.json())
                .then((data) => (this.customers = data));
        },
    },
};
</script>
