package rh.demo.consumer;

import javax.jms.ConnectionFactory;
import javax.jms.QueueConnectionFactory;
import javax.jms.TopicConnectionFactory;

import org.springframework.beans.factory.InitializingBean;

public class Oauth2ConnectionFactoryAdapter implements QueueConnectionFactory, TopicConnectionFactory, InitializingBean {
    
    private ConnectionFactory delegate;
}
