<template>
  <UTable :columns="columns" :rows="people" />
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          key: "name",
          label: "Name",
          sortable: true,
        },
        {
          key: "title",
          label: "Title",
          sortable: true,
        },
        {
          key: "email",
          label: "Email",
          sortable: true,
          direction: "desc",
        },
        {
          key: "role",
          label: "Role",
        },
      ],
      people: [
        {
          id: 1,
          name: "Lindsay Walton",
          title: "Front-end Developer",
          email: "lindsay.walton@example.com",
          role: "Member",
        },
        {
          id: 2,
          name: "Courtney Henry",
          title: "Designer",
          email: "courtney.henry@example.com",
          role: "Admin",
        },
        {
          id: 1,
          name: "Lindsay Walton",
          title: "Front-end Developer",
          email: "lindsay.walton@example.com",
          role: "Member",
        },
        {
          id: 2,
          name: "Courtney Henry",
          title: "Designer",
          email: "courtney.henry@example.com",
          role: "Admin",
        },
        {
          id: 3,
          name: "Tom Cook",
          title: "Director of Product",
          email: "tom.cook@example.com",
          role: "Member",
        },
        {
          id: 2,
          name: "Courtney Henry",
          title: "Designer",
          email: "courtney.henry@example.com",
          role: "Admin",
        },
        {
          id: 3,
          name: "Tom Cook",
          title: "Director of Product",
          email: "tom.cook@example.com",
          role: "Member",
        },
        {
          id: 4,
          name: "Whitney Francis",
          title: "Copywriter",
          email: "whitney.francis@example.com",
          role: "Admin",
        },
        {
          id: 3,
          name: "Tom Cook",
          title: "Director of Product",
          email: "tom.cook@example.com",
          role: "Member",
        },
        {
          id: 4,
          name: "Whitney Francis",
          title: "Copywriter",
          email: "whitney.francis@example.com",
          role: "Admin",
        },
        {
          id: 5,
          name: "Leonard Krasner",
          title: "Senior Designer",
          email: "leonard.krasner@example.com",
          role: "Owner",
        },
        {
          id: 6,
          name: "Floyd Miles",
          title: "Principal Designer",
          email: "floyd.miles@example.com",
          role: "Member",
        },
        {
          id: 6,
          name: "Floyd Miles",
          title: "Principal Designer",
          email: "floyd.miles@example.com",
          role: "Member",
        },
        {
          id: 6,
          name: "Floyd Miles",
          title: "Principal Designer",
          email: "floyd.miles@example.com",
          role: "Member",
        },
        {
          id: 6,
          name: "Floyd Miles",
          title: "Principal Designer",
          email: "floyd.miles@example.com",
          role: "Member",
        },
      ],
    };
  },
  mounted() {
    this.animateTableRows();
  },
  methods: {
    getRandomName() {
        const firstNames = [
          "Lindsay",
          "Courtney",
          "Tom",
          "Whitney",
          "Leonard",
          "Floyd",
        ]
        const lastNames = [
          "Walton",
          "Henry",
          "Cook",
          "Francis",
          "Krasner",
          "Miles",
        ]

        return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`
    },
    getRandomTitle() {
        const titles = [
          "Front-end Developer",
          "Designer",
          "Director of Product",
          "Copywriter",
          "Senior Designer",
          "Principal Designer",
        ]

        return titles[Math.floor(Math.random() * titles.length)]
    },
    getRandomEmail() {
        return `${this.getRandomName().toLowerCase().replace(" ", ".")}@example.com`
    },
    animateTableRows() {
      const timeout = 3000;
      setInterval(() => {
        // Create a new row
        const newRow = {
          id: this.people.length + 1,
          name: this.getRandomName(),
          title: this.getRandomTitle(),
          email: this.getRandomEmail(),
          role: "Member",
        };

        // Add the new row to the top and remove the last one
        this.people.unshift(newRow);
        this.people.pop();
      }, timeout);
    },
  },
};
</script>

<style scoped>
/* Optional: Add some basic styling for your table */
</style>
