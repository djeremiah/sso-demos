package rh.demo.backend;

import io.quarkus.security.Authenticated;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/api")
@Authenticated
public class ApiService {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String call(){
        return "backend response";
    }

}
