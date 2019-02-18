class RemoteLogger {
  sendMessage(message, value) {
    console.log(
      '\nLogging Remote Message -->> ',
      [new Date().getTime(), message, value])
  }
}

const styles = {
  red: ['color: red', '\x1b[31m'],
  yellow: ['color: yellow', '\x1b[33m'],
  blue: ['color: blue', '\m1b[34m'],
  reset: ['color: unset', '\m1b[0m']
}

const rl = new RemoteLogger();
rl.sendMessage('Hello sphere of water and land:', {name: 'Planet Earth'});


function logger(styles, useCss = true) {
  let entry;

  return function configLogger(logger, logMethod = 'log') {
    const log = logger[logMethod];

    return function loggerColor(color, message) {
      const style = styles[color];

      return function (value = null) {
        // Create entry message (true = browser / false = server)
        if (useCss)
          entry = [`%c${message}`, style[0]];
        else
          entry = [`${style[1]}${message}${styles['reset'][1]}`];

        log.apply(logger, [...entry, value]);

        return value;
      }
    }
  }
}

logger(styles, false)(console)('blue')('Try anything', {id: 322});

const baseLogger = logger(styles, false);

const consoleLog = baseLogger(console);
const remoteLog = baseLogger(new RemoteLogger(), 'sendMessage');

const infoLog = consoleLog('yellow', 'info: ');
const warningLog = consoleLog('red', 'warning: ');

infoLog('I like cheeseburgers');
warningLog('If you eat too many cheeseburgers you will feel lethargic');
