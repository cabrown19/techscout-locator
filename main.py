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
import os       ## For getting the current directory
import jinja2   ## for templating html

from google.appengine.ext import db     ## import dataStore databases

## Formatting the jinja environment. All .html files must stored in a "htmlFiles" folder
template_dir = os.path.join(os.path.dirname(__file__), 'htmlFiles')
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir), autoescape = True)

## A class for rendering with jinja templates
class Handler(webapp2.RequestHandler):
    def write(self, *a, **kw):
        self.response.write(*a, **kw)

    def render_str(self, template, **params):
        t = jinja_env.get_template(template)
        return t.render(params)

    def render(self, template, **kw):
        self.write(self.render_str(template, **kw))

class MainHandler(Handler):
    def get(self):
        ## Add more arguments here for additional inputs to the template
        self.render("initialHtml.html")

## Need to add other handlers for new pages.
app = webapp2.WSGIApplication([
    ('/', MainHandler)
    ##example (need a comma on previous line):
##  ('/newpage', NewPageHandler)  ## Now you need a NewPageHandler like the MainHandler
], debug=True)