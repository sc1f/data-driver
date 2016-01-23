//parse the csv data of police killings (https://github.com/fivethirtyeight/data/tree/master/police-killings)
  var dataset = d3.csv('/data/police_killings.csv', function(d) {
    return {
      name: d.name,
      age: +d.age,
      gender: d.gender,
      city: d.city,
      state: d.state,
      raceethnicity: d.raceethnicity
    };
  }, function(err, rows) {
    //do nothing
  });
  