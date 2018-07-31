function GitHubUser(username) {
  this.username = username;
};

GitHubUser.prototype.fetchDetails = function (cb) {
  var self = this;
  cb = cb || function () { };
  if (this.userData) {
    setTimeout(function () {
      cb(self.userData);
    }, 0);
  } else {
    fetch("https://api.github.com/users/" + this.username, { method: 'GET' })
      .then(function (response) {
        response.json()
          .then(function (data) {
            self.data = data;
            cb(data);
          });
      });
  }

};

GitHubUser.prototype.getData = function () {
  return this.userData;
}


var octocat = new GitHubUser('octocat');

octocat.fetchDetails(function (data) {
  console.log(data);
});

// class GitHubUser {
//   constructor(username) {
//     this.userData = username
//   }

//   fetchDetails(cb) {
//     const self = this;
//     cb = cb || (() => { });
//     if (this.userData) {
//       setTimeout(() => {
//         cb(self.userData);
//       }, 0);
//     } else {
//       fetch(`https://api.github.com/users/${this.username}`, { method: 'GET' })
//         .then((response) => {response.json()
//             .then((data) => {
//               self.data = data;
//               cb(data);
//             });
//         });
//     }
//   }
//   getData() {
//     return this.userData;
//   }
// }

// const octocat = new GitHubUser('octocat');

// console.log(octocat.fetchDetails(data => console.log(data, 'current data')));
