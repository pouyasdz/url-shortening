import axios from "axios";

class Service {
  #api = {
    url: "https://api-ssl.bitly.com/v4/shorten",
    header: {
      Authorization: "Bearer a8805850b630b31bd46b3affbee9ae6e1de69e24",
    },
  };
  #storage = "urls";
  
  async getShortedURL(url) {
    const newData = {
      domain: "bit.ly",
      long_url: url,
    };
    const response = await axios.post(this.#api.url, newData, {
      headers: this.#api.header,
    });
    return response.data;
  }

  saveOneInLocalStorage(url) {
    const urls = this.readAllURL();

    const newData = {
      id: url.id,
      link: url.link,
      mainUrl: url.long_url,
    };
    urls.push(newData);
    localStorage.setItem(this.#storage, JSON.stringify(urls));
  }

  readAllURL() {
    return localStorage.getItem(this.#storage) 
    ? JSON.parse(localStorage.getItem(this.#storage))
    : [];
  }

  deleteOneFromLocalStorage(id) {
    const urls = this.readAllURL();
    const newUrls = urls.filter(url => url.id !== id);
    localStorage.setItem(this.#storage, JSON.stringify(newUrls));
  }

}

export { Service };
