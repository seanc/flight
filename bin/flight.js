#!/usr/bin/env node

const meow = require('meow')
const Config = require('conf')

const client = require('../client')
const server = require('../server')
const auth = require('../auth')

const cli = meow(`
  Usage
    $ flight up <destination> <path to file or directory>
    $ flight server

  Client Options
    --compress, -c              Compress and upload file as tar.gz
    --protect, -p               Password protect a file
    --hide, -h                  Hide a file, not needed if directory listing is off

  Server Options
    --directory-listing, -l     Enable or disable directory listing
    --port, -p                  Port to run the server on
    --cert, -c                  Path to SSL/TLS certificate (ex. ./example.com.crt:./example.com.key)
    --dir, -d                   Directory to store uploads
    --config, -g                Path to configuration file
    --file-config, -f           Path to file database
`, {
  alias: {
    l: 'directory-listing',
    d: 'dir',
    g: 'config',
    f: 'file-config'
  }
})
const config = new Config()

const command = cli.input.pop()

process.on('uncaughtException', ex => console.log(ex.message))

if (command === 'up') return client(cli, config)
if (command === 'server') return server(cli, config)
if (command === 'auth') return auth(cli, config)

cli.showHelp()
