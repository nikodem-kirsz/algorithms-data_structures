function fetchData(url) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`Data from ${url}`), 1000);
    });
  }
  
function* fetchMultiData(urls) {
    for (const url of urls) {
        const data = fetchData(url);
        yield data;
    }
  }
  
  const dataUrls = [
    'https://api.example.com/data1',
    'https://api.example.com/data2',
    'https://api.example.com/data3',
  ];
  
  const dataIterator = fetchMultiData(dataUrls);
  
  function handleNext() {
    const result = dataIterator.next();
    if (!result.done) {
        result.value.then(data => {
            console.log(data)
            handleNext()
        });
    }
  }
  
  handleNext();