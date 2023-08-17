import FinalComponent from "../../components/final";
import axios from "axios";

const FinalPage = async (props) => {
  const data = await axios.get("http://localhost:3000/api/data");

  return (
    <div>
      <FinalComponent data={data.data} locale={props.params.locale} />
    </div>
  );
};

export default FinalPage;
