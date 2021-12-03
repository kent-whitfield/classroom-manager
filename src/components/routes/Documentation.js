import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

function Documentation() {
  const [darkMode] = useContext(ThemeContext);

  return (
    <div>
      <h2>Documentation Page</h2>
      <div
        className={
          darkMode
            ? "doc-container doc-container-dark"
            : "doc-container doc-container-light"
        }
      >
        <p>
          Welcome to the Classroom Manager demo project! The purpose of this
          application is to record and display student interactions, to assist
          teachers with classroom mangement. The teacher can create multiple
          lists of students, track their activity using the Lesson Mode page,
          and view activity on the Student Details page.
        </p>
        <h3>Documentation</h3>

        <h4>Routes</h4>
        <p>
          The application is grouped into the following pages:
          <dl>
            <dt>Welcome Page (Welcome.js)</dt>
            <dd>
              This is a page that got added in at the last minute, for a couple
              of reasons:
              <ol>
                <li>
                  the Schedule page that was originally planned had to be cut
                  due to time constraints
                </li>
                <li>
                  I suddenly realized I needed to make public API calls for this
                  project
                </li>
              </ol>
              It contains ApiFrame components, which consume public apis and map
              and format the data to the screen. Although it wasn't a planned
              part of the project, it turned out to be one of the more
              interesting pieces. The ApiFrame has a generic template and a
              quote template. It is designed to be semi-easily expandable with
              additional templates. It contains a data structure that allows the
              developer to map the keys from an api to the visual elemts
              displayed by the component. Welcome.js contains the list of urls
              and data maps, which are then used to create an array of ApiFrame
              components displayed on that page.
            </dd>

            <dt>Schedule Page (Schedule.js)</dt>
            <dd>
              This would have been the Home page of the application if it had
              been completed. It would allow the teacher to schedule which lists
              of students they expect to be teaching at different days and
              times.
            </dd>

            <dt>Lesson Mode (Lesson.js)</dt>
            <dd>
              This is the main page of the application. During a lesson, the
              teacher would have this page open and use it to record
              interactions with each student. This demo has buttons for class
              participation to indicate when a student has volunteered (raised
              their hand) an answer, when they are called on for an answer, and
              when they have a question. Clicking on any of these buttons will
              display a dynamic modal which represents the result of the
              interaction. Clicking a result will close the modal and push an
              object onto the student history indicating the type of interaction
              and the result. This page uses the LessonStudent component to
              generate the interaction type, and the Modal component to generate
              the result. The type and result are added to student history in
              the Lesson component (route).
            </dd>
            <dt>Student Details (StudentDetail.js)</dt>
            <dd>
              On this page, the instructor can filter students in a class and
              select a student to view a summary of their interactions, grouped
              by date. It uses the HistoryDay component to summarize and format
              stats for each day where student activity was recorded.
            </dd>
            <dt>Class Lists (EditLists.js)</dt>
            <dd>
              This page is used to create and edit class lists. Navigating to
              this page will enable the Add and Delete buttons on the
              StudentListSelector component, and allow the teacher to add,
              remove, and edit the students in each class list.
            </dd>
            <dt>Documentation (Documentation.js)</dt>
            <dd>This page.</dd>
          </dl>
        </p>
        <h4>Sources</h4>
        <p>
          The application uses the following third-party content:
          <dl>
            <dt>React Switch</dt>
            <dd>
              A toggle switch package used in the ThemeSwitch component. It was
              created by Markus Englund and Timothy McLane under the MIT
              license.{" "}
              <a href="https://www.npmjs.com/package/react-switch">npm page</a>
            </dd>
            <dt>Nano Id</dt>
            <dd>
              A unique-string id generator for Javascript, available under the
              MIT license.{" "}
              <a href="https://www.npmjs.com/package/nanoid">npm page</a>
            </dd>
            <dt>Quotable Quotes</dt>
            <dd>
              Public API supplying a random quote. Developed by Luke Peavy, used
              under the MIT license.{" "}
              <a href="https://github.com/lukePeavey/quotable">Github page</a>
            </dd>
            <dt>Random Useless Facts</dt>
            <dd>
              Public API supplying interesting but useless facts.
              <a href="https://uselessfacts.jsph.pl/">Home page</a>
            </dd>
            <dt>Fun Facts</dt>
            <dd>
              Public API serving random facts.{" "}
              <a href="https://github.com/public-apis/public-apis">
                Public API list
              </a>
            </dd>
            <dt>Weather API</dt>
            <dd>
              A free public API serving weather information. Developed by Robero
              Duessman, used under the MIT license.{" "}
              <a href="https://github.com/robertoduessmann/weather-api">
                Github page
              </a>
            </dd>
          </dl>
        </p>

        <h3>Checklist</h3>
        <hr />
        <h4>Componentization</h4>
        <p>
          The app uses the following components:
          <dl>
            <dt>ApiFrame.js</dt>
            <dd>
              Used on the Welcome page to retrieve a JSON object from a public
              api, and display specified data fields
            </dd>
            <dt>HistoryDay.js</dt>
            <dd>
              Used on the Student Detail page to summarize and display a single
              date in student history
            </dd>
            <dt>LessonStudent.js</dt>
            <dd>
              Used on the Lesson Mode page to represent a student in the class.
              Contains buttons for student interactions, which in turn call the
              Modal component to get the result.
            </dd>
            <dt>Modal.js</dt>
            <dd>
              A modal popup used by the LessonStudent component on the Lesson
              Mode page, for returning the result of a student interaction.
            </dd>
            <dt>NavBar.js</dt>
            <dd>The application navigation bar.</dd>
            <dt>StudentListElement.js</dt>
            <dd>
              A component containing a diplay template and editing template for
              student names. Used on the Class Lists page for displaying and
              editing students.
            </dd>
            <dt>StudentListSelector</dt>
            <dd>
              Displays a combo box for selecting the current list of students.
              Optionally displays butttons to add a new list or delete a list
              (if it is empty). Used on the Lesson Mode, Student Details, and
              Class Lists pages.
            </dd>
          </dl>
        </p>
        <h4>Adding, Removing, Editing, and Filtering</h4>
        <dl>
          <dt>Adding, Removing, Editing</dt>
          <dd>
            User may use the Student List Selector to add and remove student
            lists, and also edit the names of the lists. They can also add and
            remove students from the lists, and edit students names on the Class
            Lists page.
          </dd>
          <dt>Filtering</dt>
          <dd>
            The Student Lists Selector is used to interact with a single list of
            students on the Lesson Mode, Student Detail, and Class Lists page.
            The user can also filter the list of students using a text string on
            the Student Details page.
          </dd>
        </dl>
        <h4>Client-side routing</h4>
        <p>
          Client side routing is set in the App component and performed using
          the NavBar component
        </p>
        <h4>Using local storage</h4>
        <p>
          Local storage is used to store:
          <ul>
            <li>the student lists structure including student interactions</li>
            <li>the currently selected student list</li>
            <li>the visual dark/light theme of the application</li>
          </ul>
        </p>
        <h4>Global state</h4>
        <p>
          The application utilizes two contexts to provide data acess to the
          components:
          <dl>
            <dt>Theme Context</dt>
            <dd>
              The Theme Context is used to store and retrieve the light/dark
              mode visual theme for the application. The theme is toggled by the
              user using the ThemeSwitch component.
            </dd>
            <dt>Student Lists Context</dt>
            <dd>
              The Student Lists context is used extensively by the application,
              to access and edit the student lists and the history of each
              student. The Lesson Mode, Student Details, and Class Lists routes
              all make use of the StudentListSelector component, which allows
              the user to add, remove, and edit class lists when on the Class
              Lists page, and to switch lists on the fly when on the other
              pages.
            </dd>
          </dl>
        </p>
        <h4>Consume public API</h4>
        <p>
          The Welcome page consumes these public APIs:
          <ul>
            <li>
              Random Quote:{" "}
              <a href="https://api.quotable.io/random">
                https://api.quotable.io/random
              </a>
            </li>
            <li>
              Useless Facts:{" "}
              <a href="https://uselessfacts.jsph.pl/random.json?language=en">
                https://uselessfacts.jsph.pl/random.json?language=en
              </a>
            </li>
            <li>
              Fun Facts:{" "}
              <a href="https://asli-fun-fact-api.herokuapp.com/">
                https://asli-fun-fact-api.herokuapp.com/
              </a>
            </li>
            <li>
              Go Weather:{" "}
              <a href="https://goweather.herokuapp.com/weather/vancouver">
                https://goweather.herokuapp.com/weather/vancouver
              </a>
            </li>
          </ul>
        </p>
      </div>
      <div className="page-bottom"></div>
    </div>
  );
}

export default Documentation;
