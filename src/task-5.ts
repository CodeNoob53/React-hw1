type Status = 'loading' | 'success' | 'error';

function logStatus(status: Status): void {
  if (status === 'loading') {
    console.log('Loading...');
  } else if (status === 'success') {
    console.log('Operation was successful!');
  } else {
    console.log('An error occurred.');
  }
}

logStatus('loading');
logStatus('success');
logStatus('error');
// logStatus('pending'); // Error: Argument of type '"pending"' is not assignable to parameter of type 'Status'.
