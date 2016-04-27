{
  backends: [ 'statsd-elasticsearch-backend'],
   debug: true,
   elasticsearch: {
       port:          9200,
       host:          "localhost",
       path:          "/",
       indexPrefix:   "statsd",
       //indexTimestamp: "year",  //for index statsd-2015
       //indexTimestamp: "month", //for index statsd-2015.01
       indexTimestamp: "day",     //for index statsd-2015.01.01
       countType:     "counter",
       timerType:     "timer",
       timerDataType: "timer_data",
       gaugeDataType: "gauge",
       formatter:     "default_format"
   }
}
