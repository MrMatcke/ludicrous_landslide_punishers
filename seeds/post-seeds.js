const { Post } = require("../models");

const postData = [
  {
    title: "Post 1",
    post_content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Lobortis feugiat vivamus at augue eget arcu. Sit amet nulla facilisi morbi. Sollicitudin ac orci phasellus egestas tellus rutrum. Eleifend mi in nulla posuere sollicitudin. Amet purus gravida quis blandit turpis. Tortor dignissim convallis aenean et tortor at risus. At imperdiet dui accumsan sit amet nulla. Duis tristique sollicitudin nibh sit amet.",
    user_id: 3,
  },
  {
    title: "Post 2",
    post_content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Lobortis feugiat vivamus at augue eget arcu. Sit amet nulla facilisi morbi. Sollicitudin ac orci phasellus egestas tellus rutrum. Eleifend mi in nulla posuere sollicitudin. Amet purus gravida quis blandit turpis. Tortor dignissim convallis aenean et tortor at risus. At imperdiet dui accumsan sit amet nulla. Duis tristique sollicitudin nibh sit amet.",
    user_id: 1,
  },
  {
    title: "Post 3",
    post_content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Lobortis feugiat vivamus at augue eget arcu. Sit amet nulla facilisi morbi. Sollicitudin ac orci phasellus egestas tellus rutrum. Eleifend mi in nulla posuere sollicitudin. Amet purus gravida quis blandit turpis. Tortor dignissim convallis aenean et tortor at risus. At imperdiet dui accumsan sit amet nulla. Duis tristique sollicitudin nibh sit amet.",
    user_id: 2,
  },
  {
    title: "Post 4",
    post_content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Lobortis feugiat vivamus at augue eget arcu. Sit amet nulla facilisi morbi. Sollicitudin ac orci phasellus egestas tellus rutrum. Eleifend mi in nulla posuere sollicitudin. Amet purus gravida quis blandit turpis. Tortor dignissim convallis aenean et tortor at risus. At imperdiet dui accumsan sit amet nulla. Duis tristique sollicitudin nibh sit amet.",
    user_id: 5,
  },
  {
    title: "Post 5",
    post_content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Lobortis feugiat vivamus at augue eget arcu. Sit amet nulla facilisi morbi. Sollicitudin ac orci phasellus egestas tellus rutrum. Eleifend mi in nulla posuere sollicitudin. Amet purus gravida quis blandit turpis. Tortor dignissim convallis aenean et tortor at risus. At imperdiet dui accumsan sit amet nulla. Duis tristique sollicitudin nibh sit amet.",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
