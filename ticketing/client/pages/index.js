import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
	return currentUser ? (
		<h1>You are signd in</h1>
	) : (
		<h2>Tou are not signed in</h2>
	);
};

LandingPage.getInitialProps = async (context) => {
	const client = buildClient(context);
	const { data } = await client.get('/api/users/currentuser');

	return data;
};

export default LandingPage;
