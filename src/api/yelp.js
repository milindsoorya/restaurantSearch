import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer x38qODe57Hy-nh9vS5gANptxWnIA8PfvMVdgS1l8ijxd2F5HEKNJsnaVnwTdCPT3EahJ511pkc245e_8_RghbwnlwqL2ARtuQmmtfQ6YVmd95x3G-QPzynb-Hoi3XnYx",
  },
});
