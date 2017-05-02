var friends   = new Object();

friends.bill  = new Object();
friends.steve = new Object();

friends.bill.firstName   =   'Bill';
friends.bill.lastName    =   'Gates';
friends.bill.number      =   '(206) 555-5555';
friends.bill.address     =   ['Meycauayan Bulacan'];

friends.steve.firstName  =   'Steve';
friends.steve.lastName   =   'Jobs';
friends.steve.number     =   '(206) 555-5555';
friends.steve.address    =   ['Meycauayan Bulacan'];

var list = function(obj) {
  for(var prop in obj) {
    console.log(prop);
  }
};

var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};

list(friends);
search("Bill");
