module.exports = app => {

	const Tasks = app.db.models.Tasks;


	app.route('tasks')

		.all((req, res) => {

		})

		.get((req, res) => {

		})

		.post((req, res) => {

		});


	app.route('tasks/:id')

		.all((req, res) => {

		})

		.get((req, res) => {

		})

		.put((req, res) => {

		})

		.delete((req, res) => {

		});
};