#!/bin/bash

if [ "$(uname)" = "Darwin" ]
then
	ifconfig|grep inet|grep -v inet6|grep broadcast|awk -F' +' '{print $2}'
else
	ifconfig|grep inet|grep -v inet6|grep Bcast|awk -F'[: ]+' '{print $4}'
fi
