package rh.demo;

import io.quarkus.runtime.StartupEvent;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.event.Observes;

import org.eclipse.microprofile.reactive.messaging.Channel;
import org.eclipse.microprofile.reactive.messaging.Emitter;

@ApplicationScoped
public class ProducerResource {

    @Channel("amq-broker") Emitter<String> emitter;

    void onStart(@Observes StartupEvent ev){
        emitter.send("Message");
    }


    
}
