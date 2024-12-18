FROM ubuntu:24.04

# Ensure non-interactive installation
ENV DEBIAN_FRONTEND=noninteractive

# Update and install packages
RUN apt update 
RUN apt -y install mc 
RUN apt -y install bash
RUN apt -y install openssh-server
RUN apt -y install python3-pip
RUN apt -y install python3-pymongo
RUN apt -y install python3-argh
RUN apt -y install python3-requests
RUN apt -y install python3-bs4 
RUN apt -y install git-all
RUN apt -y install golang-go
RUN apt -y install curl
RUN apt -y install openssl
RUN apt -y install libpam-script

RUN mkdir -p /compile && cd /compile && git clone https://github.com/kha7iq/kc-ssh-pam.git && cd /compile/kc-ssh-pam && go build && mkdir -p /etc/kc-ssh-pam && cp /compile/kc-ssh-pam/kc-ssh-pam /etc/kc-ssh-pam 

RUN cp -a /etc /etc_original
RUN apt -y install python3-requests-oauthlib
RUN apt -y install python3-oauthlib

RUN apt -y install sudo

# Copy initialization script
COPY init.sh /init.sh
RUN chmod +x /init.sh

# Expose SSH port
EXPOSE 22

ENTRYPOINT ["/init.sh"]




