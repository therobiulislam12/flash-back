import React from "react";
import state from "../assets/state.webp";
import Prtotypical from "../assets/prototypical.png";
import UnitTest from "../assets/unit_testing.png";
import Angular from "../assets/hero.png";

const Blogs = () => {
  return (
    <div className="container mx-auto py-12 lg:py-20">
      <div className="grid gap-4 lg:gap-6 grid-cols-1 md:grid-cols-2">
        <div className="blog p-4 rounded shadow-md bg-gray-100 space-y-4">
          <img src={state} alt="how-to-state-work" className="rounded h-96" />
          <div className="space-y-2">
            <h1 className="text-lg md:text-2xl font-semibold">
              What are the different ways to manage a state in a React
              application?
            </h1>
            <hr />
            <p className="text-base">
              The Four Kinds of React State to Manage Local state. Global state.
              Server state. URL state.To do it, remove state from both of them,
              move it to their closest common parent, and then pass it down to
              them via props
            </p>
            <p className="text-base">
              When it comes to manage the state in a react component there are a
              few ways to do it. So first we are going to define what is a state
              and a component
            </p>
            <p className="text-base">
              React code is made of entities called components. Components can
              be rendered to a particular element in the DOM using the React DOM
              library. When rendering a component, one can pass in values that
              are known as “props”
            </p>
            <p className="text-base">
              The State of a component is a set of methods to manage what is
              happening inside of it. For example you have the method
              ComponentWillMount() that executes when the component gets
              rendered and let you write code to make an API call when the
              component gets rendered or assign some data to the component.
            </p>
          </div>
        </div>
        <div className="blog p-4 rounded shadow-md bg-gray-100 space-y-4">
          <img
            src={Prtotypical}
            alt="how-to-state-work"
            className="rounded h-96"
          />
          <div className="space-y-2">
            <h1 className="text-lg md:text-2xl font-semibold">
              How does prototypical inheritance work?
            </h1>
            <hr />
            <p className="text-base">
              When we read a property from object, and it’s missing, JavaScript
              automatically takes it from the prototype. In programming, this is
              called “prototypal inheritance”. And soon we’ll study many
              examples of such inheritance, as well as cooler language features
              built upon it.
            </p>
            <p className="text-base">
              Sharing amid objects makes for easy inheritance of structure (data
              fields), behavior (functions / methods), and state (data values).
            </p>
            <p className="text-base">
              JavaScript is the most common of the prototype-capable languages,
              and its capabilities are relatively unique. When used
              appropriately, prototypical inheritance in JavaScript is a
              powerful tool that can save hours of coding.
            </p>
            <p className="text-base">
              Today, we want to get you acquainted with prototypal inheritance
              in JavaScript to get you up to date with the ES6 capabilities.
            </p>
          </div>
        </div>
        <div className="blog p-4 rounded shadow-md bg-gray-100 space-y-4">
          <img
            src={UnitTest}
            alt="how-to-state-work"
            className="rounded h-96"
          />
          <div className="space-y-2">
            <h1 className="text-lg md:text-2xl font-semibold">
              What is a unit test? Why should we write unit tests?
            </h1>
            <hr />
            <p className="text-base">
              With the evolution of agile development methods, such as XP
              (eXtreme Programming), unit testing has undergone dramatic changes
              because of the TDD method. Test-driven development is a software
              development methodology in which unit tests are used to drive the
              development process. This blog will help you enhance your
              development skills as it covers the basics of Unit Testing and TDD
              explained with examples.
            </p>
            <p className="text-base">
              And unit tests are the stories that maintain the software quality
              from the first line of code. Unit tests weed out defects at an
              early stage and promote safe refactoring in the test-driven
              development(TDD) approach. Other advantages of unit testing are
              comprehensive documentation, improved coupling, and fewer
              regression tests.
            </p>
            <p className="text-base">
              In software engineering unit tests are never supposed to “replace”
              any other form of testing, but to be used together the whole time.
              Unit testing is a continuous learning process. As it is performed
              by developers, it is important for them to know how to unit test,
              what to unit test, and its best practices.
            </p>
            <p className="text-base">
              The growth of object-oriented programming has influenced the way
              programmers approach software testing. Being predominantly
              bottom-up, it is natural that object-oriented programming favors a
              similar testing methodology that focuses on classes.
            </p>
            <p className="text-base">
              A unit test exercises a “unit” of code in isolation and compares
              actual with expected results. For object-oriented programming, you
              need to consider a whole class or an interface as a unit. For
              procedural or functional programming it could be a single method
              or function. In the end, the purpose of unit testing is to
              validate that each unit/component of the software performs as
              expected.
            </p>
          </div>
        </div>
        <div className="blog p-4 rounded shadow-md bg-gray-100 space-y-4">
          <img src={Angular} alt="how-to-state-work" className="rounded h-96" />
          <div className="space-y-2">
            <h1 className="text-lg md:text-2xl font-semibold">
              What is the difference between React vs. Angular vs. Vue?
            </h1>
            <hr />
            <p className="text-base">
              Vue provides higher customizability and hence is easier to learn
              than Angular or React. Further, Vue has an overlap with Angular
              and React with respect to their functionality like the use of
              components. Hence, the transition to Vue from either of the two is
              an easy option
            </p>
            <p className="text-base">
              Just a couple of years ago, developers were mainly debating
              whether they should be using Angular vs React for their projects.
              But over the course of the last couple of years, we’ve seen a
              growth of interest in a third player called Vue.js.
            </p>
            <p className="text-base">
              If you are a developer starting out on a project and cannot decide
              on which JavaScript framework to use, this guide should help you
              make a decision.
            </p>
            <p className="text-base">
              Here we’ll cover various aspects of Angular, Vue, and React to see
              how they suit your needs. This post is not just a guide on Angular
              vs React vs Vue but aims to provide a structure to help judge
              front-end JavaScript frameworks in general. In case a new
              framework arrives next year, you will know exactly what parameters
              to look at!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
