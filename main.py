#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2

from google.appengine.ext import db     ## import dataStore databases

class MainHandler(webapp2.RequestHandler):
    def get(self):
        self.response.write("")
        ## Add more arguments here for additional inputs to the template

## Need to add other handlers for new pages.
app = webapp2.WSGIApplication([
    ('/', MainHandler)
    ##example (need a comma on previous line):
##  ('/newpage', NewPageHandler)  ## Now you need a NewPageHandler like the MainHandler
], debug=True)









