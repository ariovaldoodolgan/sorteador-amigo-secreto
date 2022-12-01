import Card from "../../components/Card";
import Footer from "../../components/Footer";
import FormCustom from "../../components/FormCustom";
import ParticipantList from "../../components/ParticipantList";

const Configuration = () => {

    return (
        <Card>
            <section>
                <h2>Let's start!</h2>
                <FormCustom />
                <ParticipantList />
                <Footer />
            </section>
        </Card>
    )
}

export default Configuration;