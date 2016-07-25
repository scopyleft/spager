;(function (module) {
  var pager = {
    // DOM NodeList (or any iterable) of the pages.
    pages: document.querySelectorAll('.page'),
    // id of the page to display by default.
    home: '',
    // id attribute of the page to display when the one requested was not found.
    error404: '',

    /**
    * Bootstrap the app:
    *   - hide all pages
    *   - listen for page changes
    *   - display home page.
    */
    init: function () {
      var self = this
      window.addEventListener('hashchange', function (event) {
        self.show(self.getCurrentHash())
      })

      this.hideAll()
      this.show(this.getCurrentHash())
    },

    /**
    * Retrieves the current hash.
    * @return String
    */
    getCurrentHash: function () {
      return document.location.hash.slice(1)
    },

    /**
    * Checks that the current pages matches a page name, or home.
    * @return Boolean
    */
    isCurrent: function (name) {
      if (name === this.getCurrentHash()) {
        return true
      }
      if (!name && this.getCurrentHash() === this.home) {
        return true
      }
      return false
    },

    /**
    * Hide all pages
    */
    hideAll: function () {
      [].forEach.call(this.pages, function (page) {
        page.classList.add('hidden')
        page.classList.remove('current')
      })
    },

    /**
    * Find the Node that matches the home best.
    * @return DOMNode
    */
    getHome: function () {
      return this.home ? document.getElementById(this.home)
        : this.pages[0]
    },

    /**
    * Modifies the pages DOM Nodes to display only the page matching 'name'.
    */
    show: function (name) {
      this.hideAll()

      var target
      if (name) {
        target = document.getElementById(name)
      } else {
        target = this.getHome()
      }
      if (!target) {
        target = document.getElementById(this.error404) || this.getHome()
      }
      target.classList.remove('hidden')
      target.classList.add('current')
    },

    /**
    * Requests a page change call.
    */
    goto: function (name) {
      document.location.hash = name || ' '
    }
  }

  module.spager = pager
})(this)
