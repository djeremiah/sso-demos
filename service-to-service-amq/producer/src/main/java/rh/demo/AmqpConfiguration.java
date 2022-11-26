package rh.demo;

import javax.enterprise.inject.Produces;
import javax.inject.Inject;

import io.quarkus.oidc.client.Tokens;
import io.smallrye.common.annotation.Identifier;
import io.vertx.amqp.AmqpClientOptions;

public class AmqpConfiguration {

    @Inject
    Tokens tokens;

    @Produces
    @Identifier("amq-config")
    public AmqpClientOptions amqConfig(){
        return new AmqpClientOptions()
            .setUsername("producer")
            .setPassword(tokens.getAccessToken());
    }
    
}
