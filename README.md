# Getting started

clone this project and run the commands below.

> add a `.env` file and add your api key to `REACT_APP_API_KEY`

> refer to the `.env.example` file

```sh
   $ npm install
   $ npm start
```

Alternatively you can run the docker container:

> do not forget to add your api key to `REACT_APP_API_KEY` in the `docker-compose.yml` file.

```sh
    $ docker-compose up
    # or to run in the background
    $ docker-compose up -d
```

> Then navigate to `http://localhost:3000`

To run tests

```sh
    $ npm test
```

## Problem

Creating an application which users can use to check information about crypto coins
of their interest, the app should have two navigation links. The App should render
a table with the order based on the rank on the Home page (Market Overview),
users should have the ability to select the amount of items per page using a dropdown
menu. The (Liquidity analysis) page should render a scatter chart where users can check
the performance of their coin of interest. This application should be ready with the shortest
possible time.

## Solution

In order to archive this, ReactJS which is a resuable components based framework (library)
is employed to achieve this goal, due to the fact that React doesn't have out of the box
solution for charts, [Recharts]('https://recharts.org/en-US) is used for the chart rendering,
pertaining to the fact that it has easy to use out of the box components and documentation which
is a good option for the time based project.
Material-UI which is based off google's Material design is also used for the UI presentation,
reducing the amount of custom css and time needed to achieve such effects. Community routing
standard library [React routing dom]('https://reactrouter.com/') is also used for the navigation
purposes. React testing Library is used to test the components based on what the user sees instead
of the underlying implementation details. Finally for easy plug and play setup solutions Docker is
used to prevent `works on my computer` scenario.

## Tech Stack used

- Create-React-App
- Material-UI
- Recharts
- Emotion css
- React router dom
- Testing Library
- TypeScript

The reasoning behind opting for these stack for the completion of the challenge is as follow:
With the exception of React which is the default framework the challenge was expected to be
completed with, I opted for Material-UI as UI-library for the task due to the fact:

- Create-React-App used instead of custom configuration and setup, though with custom
  configuration you get the flexibility to choose what you want to add and not for your
  setup, but it was comes with the cost of longer time to setup and worse case scenarios
  find out and fix bugs. so create-react-app is ideal for this use case.

- Material has a set of components which are highly customizable and a good option
  for quick protoyping, though there is less flexibility compared to writing your
  own css, however it save lots of time during this phase.

- Reharts was used in rendering the Chart on the analysis page. Choosing Recharts was
  based on the fact is compared to the other options, it has out of the box components
  that are easy to use couple with good documentation. It also has high stars on github
  and recieves regular updates. Though is has larger size compared to other libraries
  like d3.js, the ease of use on a time based project is the tradeoff

- Emotion is also a CSS in JS library which has very good documentation and support. I used
  emotion in the task due to the fact that it comes coupled with the current verion of Material-UI
  however it's an awesome library I would use in a new project.

- React router dom is the community standard for routing in React, though there are other upcoming
  popular libraries like reach router I opted for this, for the use of use and support, thus great
  for quick prototyping.

- Testing library which has considerably grown in popularity in the community is used to
  test the components to mimick what the users see and their interactions thereof. The decision
  to use this was based on the fact of support, intuitiveness, documentation and the ease of usage.

- TypeSctipt which is a superset of JavaScript was used to complete this task, though it
  has some overheads considering the time limit and the application at hand. The decision
  to go with TypeScript is based on the fact that, it helps as a code level documentation
  which reveals methods on components being used and their expected data types. It also helps
  in catching runtime bugs which are sometimes difficult to debug during development. Due to
  the fact that I was passing some data and props around I wanted to sure I was using the
  expected data and properties on components. TypeScript is great for scalability but wasn't
  really necessary for this project but due to the above reasons, It was used.

## Challenges

While rendering the scatter plot chart, there were instances I didn't fully
know whether I was parsing data in the both axis correctly, owning to the
fact of the large price and market cap in money terms. So rendering the
tick marks propotionaltely was quite a challenge which I would have invested
more time into if I more time on my hands.

Also I didn't have enough time to write unit tests for the other components
making up the page. In the real world scenario with more time I enjoy covering
all my components with tests.

## Going Forward

I would have also refactored the `App` component if there was enough time and
have the routes in their separate files as well as remove other functions (methods)
from it and make it more cleaner including refining the other components to make it
cleaner.
Though create react app comes with out of the box eslint configuration, provided I had
enough time I would have customised it to my workflow, as well as linting and beutifier (prettier) the code in
a precommit hook before pushing any changes.
