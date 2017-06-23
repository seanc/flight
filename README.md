# flight
> Upload and share files easily

## Installation

```sh
$ npm install -g flight
```

## Usage

```sh
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
```

## License

MIT © [Sean Wilson](https://imsean.me)
