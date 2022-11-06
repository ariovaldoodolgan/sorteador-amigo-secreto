import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import ParticipantList from "../../components/ParticipantList";

const Configuration = () => {

    return (
        <Card>
            <section>
                <h2>Let's start!</h2>
                <Form />
                <ParticipantList />
                <Footer />
            </section>
        </Card>
    )
}

export default Configuration;