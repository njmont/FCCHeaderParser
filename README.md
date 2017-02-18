<div class="padding main-div">
        <h1>Timestamp Microservice</h1>
        <div class="inset-div">
            <p>
                <strong>
                  User stories:
                </strong>
            </p>
            <div class="push-left">
              <p>
                  1) I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
              </p>
              <p>
                  2) If it does, it returns both the Unix timestamp and the natural language form of that date.
              </p>
              <p>
                  3) If it does not contain a date or Unix timestamp, it returns null for those properties.
              </p>
            </div>
Example Usage
<pre>
<a href="https://limitless-peak-23778.herokuapp.com/December%2015,%202015">https://limitless-peak-23778.herokuapp.com/December%2015,%202015</a>
<a href="https://limitless-peak-23778.herokuapp.com/December%2015,%202015">https://limitless-peak-23778.herokuapp.com/1450137600</a></pre>
Example output:
<pre>{ "unix": 1450137600, "natural": "December 15, 2015" }</pre>
