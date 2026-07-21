JsMacros.createCustomEvent("SnippetInvoker")
customEvent.putString("command", "A")
JsMacros.runScript("Invoker.js",customEvent)
event.getString("command")