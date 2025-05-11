import BaseLayout from "../layouts/BaseLayout.jsx";
import BookDetails from "../components/bookDetails/BookDetails.jsx";

const DetailPage = () => {
    return (
        <>
            <BaseLayout>
                <main>
                    <BookDetails />
                </main>
            </BaseLayout>
        </>
    );
};

export default DetailPage;