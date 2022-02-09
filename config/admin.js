module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd6921a7457d454ab678364996b84a9d8'),
  },
});
